module.exports = async function (context, req) {
  const date = "2022-11-04T04:36:23.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

