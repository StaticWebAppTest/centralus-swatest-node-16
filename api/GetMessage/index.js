module.exports = async function (context, req) {
  const date = "2023-07-10T06:13:57.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

