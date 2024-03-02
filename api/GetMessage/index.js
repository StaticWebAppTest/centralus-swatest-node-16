module.exports = async function (context, req) {
  const date = "2024-03-02T09:08:07.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

