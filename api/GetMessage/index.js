module.exports = async function (context, req) {
  const date = "2023-03-01T13:20:36.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

