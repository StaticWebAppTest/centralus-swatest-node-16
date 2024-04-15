module.exports = async function (context, req) {
  const date = "2024-04-15T12:18:26.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

