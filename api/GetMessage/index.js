module.exports = async function (context, req) {
  const date = "2022-11-23T05:09:44.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

