module.exports = async function (context, req) {
  const date = "2022-03-16T22:09:09.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

