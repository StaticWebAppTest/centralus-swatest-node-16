module.exports = async function (context, req) {
  const date = "2022-11-06T17:11:12.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

