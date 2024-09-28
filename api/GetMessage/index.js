module.exports = async function (context, req) {
  const date = "2024-09-28T17:09:07.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

