module.exports = async function (context, req) {
  const date = "2022-04-16T19:08:21.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

