module.exports = async function (context, req) {
  const date = "2022-10-13T09:18:13.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

