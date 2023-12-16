module.exports = async function (context, req) {
  const date = "2023-12-16T13:09:33.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

