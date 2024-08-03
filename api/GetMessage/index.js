module.exports = async function (context, req) {
  const date = "2024-08-03T17:09:08.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

