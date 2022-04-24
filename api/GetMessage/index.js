module.exports = async function (context, req) {
  const date = "2022-04-24T18:12:14.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

