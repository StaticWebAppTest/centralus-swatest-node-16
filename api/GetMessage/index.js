module.exports = async function (context, req) {
  const date = "2024-04-26T14:08:35.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

