module.exports = async function (context, req) {
  const date = "2022-06-19T17:09:43.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

