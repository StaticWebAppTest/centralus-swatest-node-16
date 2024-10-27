module.exports = async function (context, req) {
  const date = "2024-10-27T08:15:51.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

