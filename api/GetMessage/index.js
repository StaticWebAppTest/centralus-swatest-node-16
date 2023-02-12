module.exports = async function (context, req) {
  const date = "2023-02-12T22:08:39.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

