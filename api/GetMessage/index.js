module.exports = async function (context, req) {
  const date = "2023-10-02T18:11:40.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

