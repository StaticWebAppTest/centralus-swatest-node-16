module.exports = async function (context, req) {
  const date = "2022-10-16T10:12:57.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

