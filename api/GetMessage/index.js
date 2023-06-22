module.exports = async function (context, req) {
  const date = "2023-06-22T17:07:45.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

