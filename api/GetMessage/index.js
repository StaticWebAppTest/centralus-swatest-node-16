module.exports = async function (context, req) {
  const date = "2024-03-28T09:09:57.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

