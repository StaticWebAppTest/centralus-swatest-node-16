module.exports = async function (context, req) {
  const date = "2023-12-19T16:10:45.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

