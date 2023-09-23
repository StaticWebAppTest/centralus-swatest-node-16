module.exports = async function (context, req) {
  const date = "2023-09-23T18:10:09.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

