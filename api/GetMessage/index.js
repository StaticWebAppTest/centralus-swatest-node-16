module.exports = async function (context, req) {
  const date = "2023-09-25T18:11:39.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

