module.exports = async function (context, req) {
  const date = "2024-12-14T21:10:27.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

