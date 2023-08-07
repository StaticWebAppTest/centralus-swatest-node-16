module.exports = async function (context, req) {
  const date = "2023-08-07T09:09:07.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

