module.exports = async function (context, req) {
  const date = "2023-10-16T08:12:23.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

