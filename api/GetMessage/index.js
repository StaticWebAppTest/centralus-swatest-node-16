module.exports = async function (context, req) {
  const date = "2023-07-19T03:40:23.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

