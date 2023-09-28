module.exports = async function (context, req) {
  const date = "2023-09-28T16:11:21.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

