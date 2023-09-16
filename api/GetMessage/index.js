module.exports = async function (context, req) {
  const date = "2023-09-16T18:09:46.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

