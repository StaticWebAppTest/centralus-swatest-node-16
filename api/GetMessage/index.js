module.exports = async function (context, req) {
  const date = "2023-07-12T13:20:30.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

