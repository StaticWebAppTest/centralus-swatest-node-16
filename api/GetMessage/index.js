module.exports = async function (context, req) {
  const date = "2023-10-08T10:08:14.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

