module.exports = async function (context, req) {
  const date = "2022-06-03T14:09:15.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

