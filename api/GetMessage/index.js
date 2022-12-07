module.exports = async function (context, req) {
  const date = "2022-12-07T04:12:04.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

