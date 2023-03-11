module.exports = async function (context, req) {
  const date = "2023-03-11T08:12:00.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

