module.exports = async function (context, req) {
  const date = "2023-11-11T11:06:52.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

