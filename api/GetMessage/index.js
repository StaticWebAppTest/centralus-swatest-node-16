module.exports = async function (context, req) {
  const date = "2024-02-03T18:10:02.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

