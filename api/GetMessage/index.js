module.exports = async function (context, req) {
  const date = "2023-12-15T04:11:30.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

