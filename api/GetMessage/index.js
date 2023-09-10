module.exports = async function (context, req) {
  const date = "2023-09-10T10:08:06.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

