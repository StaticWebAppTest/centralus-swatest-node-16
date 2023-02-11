module.exports = async function (context, req) {
  const date = "2023-02-11T23:09:00.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

