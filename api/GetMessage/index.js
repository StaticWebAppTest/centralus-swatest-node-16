module.exports = async function (context, req) {
  const date = "2023-12-03T03:09:27.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

