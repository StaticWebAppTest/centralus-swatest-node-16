module.exports = async function (context, req) {
  const date = "2022-08-26T18:13:48.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

