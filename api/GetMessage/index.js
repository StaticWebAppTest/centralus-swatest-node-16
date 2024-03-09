module.exports = async function (context, req) {
  const date = "2024-03-09T07:08:01.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

