module.exports = async function (context, req) {
  const date = "2023-12-25T16:10:57.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

