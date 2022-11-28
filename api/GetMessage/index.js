module.exports = async function (context, req) {
  const date = "2022-11-28T12:19:52.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

