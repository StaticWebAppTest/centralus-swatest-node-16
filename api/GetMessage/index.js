module.exports = async function (context, req) {
  const date = "2024-03-14T12:17:08.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

