module.exports = async function (context, req) {
  const date = "2023-12-25T09:09:33.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

