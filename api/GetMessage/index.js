module.exports = async function (context, req) {
  const date = "2023-04-28T11:07:04.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

