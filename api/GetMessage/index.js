module.exports = async function (context, req) {
  const date = "2023-02-10T10:11:07.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

