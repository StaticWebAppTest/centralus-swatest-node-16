module.exports = async function (context, req) {
  const date = "2022-07-04T18:13:37.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

