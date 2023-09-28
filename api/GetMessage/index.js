module.exports = async function (context, req) {
  const date = "2023-09-28T09:08:59.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

