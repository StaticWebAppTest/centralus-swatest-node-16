module.exports = async function (context, req) {
  const date = "2024-09-16T18:15:07.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

