module.exports = async function (context, req) {
  const date = "2023-06-28T04:12:23.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

